// Material Symbols icon font, subsetted to only the icons this site actually uses.
//
// WHY THIS FILE EXISTS: requesting the font with open-ended axis ranges pulls a
// 3.96 MB file. Pinning the axes and subsetting to these icons brings it to 15 KB.
//
// ADDING A NEW ICON: add its name to this list, or it will render as literal text
// (a "lightbulb" icon shows the word "lightbulb"). To regenerate the whole list
// from the codebase, run this from the project root:
//
//   {
//     grep -rhoE 'material-symbols-outlined[^>]*>[[:space:]]*[a-z_0-9]+' --include="*.tsx" . | sed -E 's/.*>[[:space:]]*//'
//     grep -rhoE '\bicon:[[:space:]]*"[a-z_0-9]+"' --include="*.tsx" . | sed -E 's/.*"([a-z_0-9]+)"/\1/'
//   } | grep -v node_modules | grep -vE '^$' | sort -u
//
// Both greps are needed: icons appear as literal JSX children AND as `icon:` values
// inside data arrays.

export const MATERIAL_SYMBOL_NAMES = [
  "ac_unit",
  "analytics",
  "arrow_back",
  "arrow_downward",
  "arrow_forward",
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
  "factory",
  "family_restroom",
  "folder_copy",
  "forest",
  "format_quote",
  "gavel",
  "grading",
  "group_add",
  "groups",
  "handshake",
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
