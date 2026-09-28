# 5,000 Days, Technology Change Styles Assessment

A static, browser-based assessment for `5000days.net`, designed for hosting on Amazon S3 and optionally delivered through CloudFront.

## What is included

The opening screen offers three paths:

1. **Personal + Company**, 39 questions total
2. **Personal only**, 24 questions
3. **Company only**, choose one company (15 questions) or compare two (30 questions)

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

During questions, style names and scoring letters are hidden. Categorical answer choices are shuffled independently for each question and company; ordinal scales retain an explicit logical order. The ambiguity scale is Very low, Low, Moderate if measurable, High, then Variable. Randomised presentation order is saved so back navigation and resuming remain consistent. Number keys select the displayed option. Internal style keys and scoring are unchanged. This applies to all assessment paths.

## Company comparison

Company-only begins with a choice of one or two companies and optional names. The comparison purpose is selected on the results page, after both profiles and the chart. Each company answers the same unchanged 15 questions independently. Results include named profiles, illustrated summary cards and a grouped column chart on a shared 0 to 15 scale, and discussion prompts for the highest-scoring styles, including ties.

Pairing guidance is based on the existing style descriptions. It is not a validated compatibility score, an assessment of company age, or a prediction of acquisition success. Acquisition prompts address decision rights, protected autonomy, integration, and retaining people and practices; career prompts encourage checking interview impressions against real examples.

Names, answers, and progress remain in the existing browser-only storage. Older saved results are supported. Sharing a comparison includes both company names and style results; printing includes the comparison and detailed profiles.

Run the dependency-free logic regression checks from the repository root:

```bash
node assessment/tests/company-comparison.test.js
```

These use a minimal DOM stub to check assessment state, navigation, scoring, storage migration, and comparison rendering. They do not replace a real-browser visual/accessibility check.

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

The HTML references versioned CSS and JavaScript URLs (`?v=12`) to reduce stale-browser-cache problems.

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


## Current review validation

The prepared assessment includes all 11 original PNG illustrations in `images/`. The grouped comparison chart uses company colours and distinct bar shapes/patterns, visible values, and screen-reader labels. Individual score profiles remain unchanged.

`../verification/browser-check.js` exercises the two-company flow in Edge, verifies ordered scales after back navigation and reload, checks loaded images and tied results, and captures desktop/mobile screenshots. It requires Playwright and the Edge browser.

## Results exploration and tailored guidance

Every results page has an Explore all styles action. The overlay includes the five company styles and six personal styles, with existing illustrations, descriptions, strengths, and friction points. Company comparison chart labels also open a focused illustrated summary of that company style. Both overlays support keyboard navigation, Escape, and returning focus to the opening control without changing saved answers.

Company pairing guidance now includes practices to preserve from both companies and observable warning signs. Each of the 15 distinct pairings has its own discussion question and a separate career/interview prompt. Acquisition questions explicitly address integration before standardisation. The final working-plan section supplies shared steps for protecting culture, piloting technology together, and monitoring lost momentum. Tied results show the relevant unique pairings.

The navigation uses absolute links to https://5000days.net/#infographics and https://5000days.net/#about, with the latter labelled The Book Behind the Assessment.

## Explore all comparison perspectives

Two-company results offer three interchangeable perspectives: working together, a potential job move, and an acquisition or merger. Working together is the default for a new assessment. Switching replaces the entire perspective-specific guidance view, preserving company names, answers, scores, completion, and current focus. The selected perspective is saved and restored on resume; older saved perspectives remain supported. Printing includes the currently selected perspective.

Validated with 75 logic checks and the browser flow, including all three perspective switches, unchanged profiles and chart values, keyboard interaction, saved-view restoration, and 320px mobile layout.

The three perspective panels are mutually exclusive. Inactive panels are hidden and cleared. Collaboration shows joint adoption strengths, friction, and pilot agreements; career shows interview questions and environment checks; acquisition shows preservation priorities, integration risks, and warning signs. Only the selected panel contributes page content or appears in print. The company profiles and chart remain shared.
