# Culture Document Fix Plan & Progress

## Information Gathered
- templates/culture.html: HTML page with iframe for embedding culture document.
- Current iframe src uses invalid absolute Windows path to non-existent .docx: fails to load.
- documents/Cultural Practice.pdf exists, content is Kikuyu Traditional Farming/Culture doc (text extracted fine).
- JS has loadCultureDoc('pdf') for direct PDF load with cache bust.
- Download links correct for PDF.
- Page structure good, styles fine.

## Plan
- Fix iframe src to relative PDF path.
- Update JS loadCultureDoc to use Office viewer for robust PDF viewing (optional, direct works).
- Update labels/texts to match PDF content (Kikuyu Farming).
- Ensure initial load works.

## Dependent Files
- templates/culture.html (main)
- documents/Cultural Practice.pdf (no edit needed)

## Followup steps
- Open templates/culture.html in browser to test.
- No installs needed.

## Progress
- [x] Analyzed files
- [ ] Applied fixes to culture.html
- [ ] Test page

Proceed with edits?
