export interface NavResource {
  tag: string
  title: string
  copy: string
  to: string
  imageClass: string
  status: 'published' | 'draft'
}

// Surfaced in the header's Resources dropdown ("Latest" row, up to 2 shown).
// Only entries with status "published" are ever shown; everything else
// falls back to the "New resources coming soon." muted line.
export const navResources: NavResource[] = []
