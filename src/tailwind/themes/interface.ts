export interface OsomTheme {
  colorScheme: 'light' | 'dark';

  fontSans: string;
  fontSerif: string;
  fontMono: string;

  colorBase100: string;
  colorBase200: string;
  colorBase300: string;
  colorBaseContent: string;

  colorPrimary: string;
  colorPrimaryContent: string;
  colorSecondary: string;
  colorSecondaryContent: string;

  colorAccent: string;
  colorAccentContent: string;
  colorNeutral: string;
  colorNeutralContent: string;

  colorInfo: string;
  colorInfoContent: string;
  colorSuccess: string;
  colorSuccessContent: string;
  colorWarning: string;
  colorWarningContent: string;
  colorError: string;
  colorErrorContent: string;

  sizeCell: string;

  roundedBox: string;
  roundedBtn: string;
  roundedBadge: string;
}
