type Mods = Record<string, boolean | string>

export const classNames = (cls: string, mods: Mods | undefined = {}, additional: string[] | undefined = []): string => {
  return [
    cls, 
    ...additional,
    ...Object.entries(mods).filter(([_, value]) => !!value).map(([className]) => className)
  ].join(' ');
}