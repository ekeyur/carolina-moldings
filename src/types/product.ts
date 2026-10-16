export type Category = {
  id: string;
  name: string;
  tag: string;
  blurb: string;
};

export type Product = {
  id: string;
  name: string;
  /** Other names the part is known by ("Combo Head Screw for Index Box"). */
  altNames?: string[];
  partNo: string;
  /** OEM / competitor cross-reference numbers this part replaces. */
  altPartNos?: string[];
  cat: string;
  brand?: string;
  ph: string;
  material?: string;
  pack?: string;
  fits?: string;
  spec?: string;
  tamperCompatible?: boolean;
  kit?: boolean;
  bullets?: string[];
  desc: string;
  images: string[];
};

export type CatalogData = {
  categories: Category[];
  meterBrands: string[];
  products: Product[];
};
