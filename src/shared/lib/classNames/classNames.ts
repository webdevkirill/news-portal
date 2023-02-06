type Mods = Record<string, boolean | string>;

export const classNames = (cls: string, mods: Mods = {}, additional: string[] = []): string => {
  return [
    cls,
    ...Object.entries(mods)
      .filter(([className, value]) => !!value)
      .map(([className, value]) => className),
    ...additional.filter(Boolean),
  ].join(' ');
};
