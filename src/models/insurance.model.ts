export interface Insurance {
  id: number;
  name: string;
  type: string;
  coverage: number;
  price: number;
  durationMonths: number;
  details: string;
  status: 'pending' | 'approved' | 'rejected';
}
