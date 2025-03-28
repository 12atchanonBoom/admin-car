import { Injectable } from '@angular/core';
import { Insurance } from '../../models/insurance.model';


@Injectable({ providedIn: 'root' })
export class InsuranceService {
  private insurances: Insurance[] = [
    { id: 1, name: 'ประกันชั้น 1', type: 'รถเก๋ง', coverage: 1000000, price: 15000, durationMonths: 12 },
    { id: 2, name: 'ประกันชั้น 2+', type: 'รถกระบะ', coverage: 500000, price: 9000, durationMonths: 12 }
  ];

  getInsurances(): Insurance[] {
    return [...this.insurances];
  }

  addInsurance(insurance: Insurance): void {
    insurance.id = this.generateId();
    this.insurances.push(insurance);
  }

  updateInsurance(updated: Insurance): void {
    const index = this.insurances.findIndex(i => i.id === updated.id);
    if (index !== -1) this.insurances[index] = updated;
  }

  deleteInsurance(id: number): void {
    this.insurances = this.insurances.filter(i => i.id !== id);
  }

  private generateId(): number {
    return this.insurances.length > 0 ? Math.max(...this.insurances.map(i => i.id)) + 1 : 1;
  }
}
