import * as cheerio from 'cheerio';

export type ScholarPublication = {
  title: string;
  authors: string;
  journal: string;
  year: string;
  link: string;
};

const SCHOLAR_USER_ID = 'DE6CicUAAAAJ';
const SCHOLAR_URL = `https://scholar.google.com/citations?hl=en&user=${SCHOLAR_USER_ID}&sortby=pubdate`;

/**
 * Best-effort scrape of the public Google Scholar author page.
 * Google has no official API for this and actively blocks automated
 * requests from datacenter IPs, so this can legitimately return null
 * in production — callers must fall back to known-good data.
 */
export async function fetchScholarPublications(): Promise<ScholarPublication[] | null> {
  try {
    const res = await fetch(SCHOLAR_URL, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9',
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) return null;

    const html = await res.text();
    if (/id="gs_captcha"|unusual traffic/i.test(html)) {
      return null;
    }

    const $ = cheerio.load(html);
    const pubs: ScholarPublication[] = [];

    $('#gsc_a_b .gsc_a_tr').each((_, row) => {
      const el = $(row);
      const titleEl = el.find('.gsc_a_at');
      const title = titleEl.text().trim();
      const href = titleEl.attr('href');
      const grayDivs = el.find('.gs_gray');
      const authors = $(grayDivs.get(0)).text().trim();
      const journal = $(grayDivs.get(1)).text().trim();
      const year = el.find('.gsc_a_y span').text().trim();

      if (!title || !href) return;

      const dedash = (s: string) => s.replace(/[—–]/g, '-');

      pubs.push({
        title: dedash(title),
        authors: dedash(authors),
        journal: dedash(journal),
        year,
        link: `https://scholar.google.com${href}`,
      });
    });

    return pubs.length > 0 ? pubs : null;
  } catch {
    return null;
  }
}
