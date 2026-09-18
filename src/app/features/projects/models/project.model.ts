export interface Project {
  readonly id: number;
  readonly slug: string;
  readonly title: string;
  readonly description: string;
  readonly category: string;

  readonly price: string;
  readonly estimatedTime: string;
  readonly materials: readonly string[];
  readonly customization: string;

  readonly coverImage?: string;
  readonly images: readonly string[];

  readonly featured: boolean;
}