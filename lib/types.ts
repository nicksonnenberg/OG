export interface ContentSectionProps {
    id: string;
    background?: {
      type: string;
      value: any;
      direction?: string;
    };
    textColor?: {
      type: string;
      value: string;
    };
    content: Array<any>;
  }
  