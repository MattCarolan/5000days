# 5,000 Days, Technology Change Styles Assessment

A static, browser-based assessment for `5000days.net`, designed for hosting on Amazon S3 and optionally delivered through CloudFront.

## What is included

The opening screen offers three paths:

1. **Personal + Company**, 39 questions total
2. **Personal only**, 24 questions
3. **Company only**, 15 questions

The Personal Technology Change Styles are:

- The Architect
- The Optimizer
- The Firefighter
- The Translator
- The Skeptic
- The Explorer

The Company Technology Change Styles are:

- The Freight Train
- The Assembly Line
- The Off-Road Vehicle
- The Control Tower
- The Shape-Shifter

When both assessments are completed, the results page shows the two score profiles separately and adds a **Putting It All Together** section. The combined view is intentionally not presented as a compatibility score. It helps the respondent think about which personal behaviours the organization amplifies or suppresses.

Tied top scores are shown honestly as blended or hybrid results. Personal and company blended results display all matching illustrations in a compact grid beneath the relevant score profile.

## Files

```text
index.html
styles.css
quiz.js
robots.txt
images/
  the-architect.png
  the-optimizer.png
  the-firefighter.png
  the-translator.png
  the-skeptic.png
  the-explorer.png
  the-freight-train.png
  the-assembly-line.png
  the-off-road-vehicle.png
  the-control-tower.png
  the-shape-shifter.png
```

The assessment has no server-side dependencies, database, tracking library, external JavaScript package, or build step. Progress is stored only in the respondent's browser using `localStorage`.

## Recommended URL

Upload the files to:

```text
/personal-technology-change-style/
```

This keeps the existing URL stable even though the page now includes both assessments:

```text
https://www.5000days.net/personal-technology-change-style/
```

A future redirect to `/technology-change-styles/` can be added later without breaking existing book links or bookmarks.

## S3 deployment

Upload the **contents** of this folder, not the enclosing folder itself, to the chosen S3 prefix.

Example using the AWS CLI:

```bash
aws s3 sync ./5000days-technology-change-assessment/ \
  s3://YOUR-BUCKET/personal-technology-change-style/ \
  --delete
```

Set these content types if your upload process does not infer them:

```text
.html  text/html; charset=utf-8
.css   text/css; charset=utf-8
.js    application/javascript; charset=utf-8
.png   image/png
.txt   text/plain; charset=utf-8
```

## CloudFront cache invalidation

After uploading, invalidate the assessment path:

```bash
aws cloudfront create-invalidation \
  --distribution-id YOUR_DISTRIBUTION_ID \
  --paths "/personal-technology-change-style/*"
```

The HTML references versioned CSS and JavaScript URLs (`?v=6`) to reduce stale-browser-cache problems.

## Testing completed

The package was tested in headless Chromium for:

- all three opening choices
- all 24 personal questions
- all 15 company questions
- the transition between the two assessments
- personal scoring and images
- company scoring and images
- combined results and the intersection section
- tied personal and company results with multiple tied images
- responsive mobile question layout
- JavaScript console and runtime errors

## Updating content

All questions, mappings, and result descriptions are defined near the top of `quiz.js`:

- `personalQuestions`
- `companyQuestions`
- `personalStyles`
- `companyStyles`

The visual design is contained in `styles.css`.
