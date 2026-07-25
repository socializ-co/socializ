export const EDITIONS = ['CE', 'EE', 'CL'] as const;

export type Edition = (typeof EDITIONS)[number];

export type EditionConfig = {
  edition: Edition;
  label: string;
  isCommunity: boolean;
  isEnterprise: boolean;
  isCloud: boolean;
  isSelfHosted: boolean;
};

/** Resolves the public client-side distribution: CE, EE, or CL. */
export function resolveEdition(value?: string): Edition {
  const normalized = value?.trim().toUpperCase();

  if (!normalized) {
    return 'CE';
  }

  switch (normalized) {
    case 'EE':
      return 'EE';
    case 'CL':
      return 'CL';
    case 'CE':
      return 'CE';
    default:
      throw new Error(
        `Invalid NEXT_PUBLIC_EDITION: "${value}". Expected CE, EE, or CL.`,
      );
  }
}

export function getEditionConfig(
  value = process.env.NEXT_PUBLIC_EDITION,
): EditionConfig {
  const edition = resolveEdition(value);

  return {
    edition,
    label: edition,
    isCommunity: edition === 'CE',
    isEnterprise: edition === 'EE',
    isCloud: edition === 'CL',
    isSelfHosted: edition !== 'CL',
  };
}

/** Source of truth for edition checks throughout the web client. */
export const editionConfig = getEditionConfig();
