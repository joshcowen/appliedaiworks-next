// Material Symbols icon font, subsetted to only the icons this site actually uses.
//
// WHY THIS FILE EXISTS: requesting the font with open-ended axis ranges pulls a
// 3.96 MB file. Pinning the axes and subsetting to these icons brings it to 15 KB.
//
// The font is now SELF-HOSTED at public/fonts/material-symbols-subset.woff2 with
// the @font-face in globals.css. Loading it from fonts.googleapis.com put a
// render-blocking third-party request in the critical path, which showed up as
// Core Web Vitals declines in Semrush on pages that had no other changes.
//
// ADDING A NEW ICON is a TWO-STEP job:
//   1. Add its name to the list below.
//   2. Regenerate the woff2, or the icon renders as literal text (a "lightbulb"
//      icon shows the word "lightbulb"), clipped by the 1em box in globals.css
//      so you actually just see a stray "l".
//
// To regenerate the font file after editing the list, run from the project root:
//
//   URL=$(python3 -c "
//   import re
//   n = re.findall(r'^\s*\"([a-z_0-9]+)\",\s*$', open('lib/materialSymbols.ts').read(), re.M)
//   print('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:'
//         'opsz,wght,FILL,GRAD@24,400,0..1,0&icon_names=' + ','.join(n) + '&display=block')")
//   UA='Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/126.0 Safari/537.36'
//   curl -s -A "$UA" "$URL" | grep -o 'https://fonts.gstatic.com[^)]*' \
//     | xargs curl -s -o public/fonts/material-symbols-subset.woff2
//
// To audit the codebase against this list, run this from the project root:
//
//   python3 - <<'PY'
//   import re, pathlib
//   tag  = re.compile(r'material-symbols-outlined[^"]*"[^>]*>\s*([a-z_0-9]+)\s*</span>', re.S)
//   icon = re.compile(r'\bicon:\s*"([a-z_0-9]+)"')
//   used = set()
//   for p in pathlib.Path('.').rglob('*.tsx'):
//       if 'node_modules' in p.parts: continue
//       t = p.read_text(encoding='utf-8', errors='replace')
//       used |= set(tag.findall(t)) | set(icon.findall(t))
//   listed = set(re.findall(r'^  "([a-z_0-9]+)",', pathlib.Path('lib/materialSymbols.ts').read_text(), re.M))
//   print("MISSING:", sorted(used - listed))
//   print("UNUSED :", sorted(listed - used))
//   PY
//
// Both patterns are needed: icons appear as literal JSX children AND as `icon:`
// values inside data arrays. This has to match across newlines (re.S) because a
// formatted JSX tag puts the icon name on its own line. An earlier line-based
// grep here silently missed every multi-line usage, which is how expand_more and
// help shipped broken.

export const MATERIAL_SYMBOL_NAMES = [
  "ac_unit",
  "analytics",
  "arrow_back",
  "arrow_downward",
  "arrow_forward",
  "arrow_right",
  "article",
  "assignment",
  "attach_money",
  "auto_fix_high",
  "autorenew",
  "bedtime",
  "bolt",
  "build",
  "calculate",
  "calendar_month",
  "calendar_today",
  "call",
  "campaign",
  "cancel",
  "car_crash",
  "car_repair",
  "chat",
  "check_circle",
  "checklist",
  "cleaning_services",
  "co_present",
  "construction",
  "description",
  "edit_document",
  "edit_note",
  "email",
  "emergency",
  "event",
  "event_available",
  "event_repeat",
  "expand_more",
  "factory",
  "family_restroom",
  "flag",
  "folder_copy",
  "forest",
  "format_quote",
  "gavel",
  "grading",
  "group_add",
  "groups",
  "handshake",
  "help",
  "history",
  "hub",
  "info",
  "lightbulb",
  "location_city",
  "location_on",
  "mail",
  "mark_email_read",
  "mark_email_unread",
  "north_east",
  "notifications_off",
  "open_in_new",
  "payments",
  "person",
  "person_off",
  "person_search",
  "phone_missed",
  "photo_camera",
  "plumbing",
  "progress_activity",
  "quiz",
  "rate_review",
  "receipt_long",
  "repeat",
  "reply_all",
  "request_quote",
  "reviews",
  "schedule",
  "schedule_send",
  "school",
  "search",
  "send",
  "star",
  "summarize",
  "support_agent",
  "sync_problem",
  "thermostat",
  "thumb_up",
  "timer",
  "translate",
  "trending_down",
  "trending_up",
  "update",
  "visibility_off",
  "water",
  "waves",
  "waving_hand",
  "work",
  "yard",
] as const;

// Axes are pinned to the single values the site uses (opsz 24, wght 400, GRAD 0).
// FILL stays a 0..1 range because globals.css defaults to FILL 0 and many icons
// override to FILL 1 inline.
export const MATERIAL_SYMBOLS_HREF =
  "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0..1,0" +
  `&icon_names=${MATERIAL_SYMBOL_NAMES.join(",")}` +
  "&display=block";
