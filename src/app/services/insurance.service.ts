import { Injectable } from '@angular/core';
import { Insurance } from '../../models/insurance.model';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {
  private insurances: Insurance[] = [
    { 
      id: 1, 
      name: 'ประกันชั้น 1', 
      type: 'รถเก๋ง', 
      coverage: 1000000, 
      price: 15000, 
      durationMonths: 12,
      details: 'คุ้มครองรถหายและอุบัติเหตุ',
      status: 'pending'
    },
    { 
      id: 2, 
      name: 'ประกันชั้น 2+', 
      type: 'รถกระบะ', 
      coverage: 500000, 
      price: 9000, 
      durationMonths: 12,
      details: 'คุ้มครองอุบัติเหตุและบางกรณีของการขับขี่',
      status: 'approved'
    }
  ];

  // ✅ เพิ่มแผนประกันใหม่
  addInsurance(insurance: Insurance): void {
    insurance.id = this.generateId();
    insurance.status = 'pending'; // default สถานะเมื่อเพิ่มใหม่
    this.insurances.push(insurance);
  }

  // ✅ แก้ไขแผนประกัน
  updateInsurance(updated: Insurance): void {
    const index = this.insurances.findIndex(i => i.id === updated.id);
    if (index !== -1) {
      this.insurances[index] = updated;
    }
  }

  // ✅ ลบแผนประกัน
  deleteInsurance(id: number): void {
    this.insurances = this.insurances.filter(i => i.id !== id);
  }

  // ✅ ดึงคำขอที่รอการอนุมัติ
  getPendingRequests(): Insurance[] {
    return this.insurances.filter(insurance => insurance.status === 'pending');
  }

  // ✅ อนุมัติคำขอ
  approveInsurance(id: number, policyNumber: string, documentFile: File): void {
    const insurance = this.insurances.find(i => i.id === id);
    if (insurance) {
      insurance.status = 'approved';
      console.log('กรมธรรม์:', policyNumber);
      console.log('ไฟล์เอกสาร:', documentFile);
    }
  }

  // ✅ ปฏิเสธคำขอ
  rejectInsurance(id: number): void {
    const insurance = this.insurances.find(i => i.id === id);
    if (insurance) {
      insurance.status = 'rejected';
    }
  }

  // ✅ ดึงข้อมูลทั้งหมด
  getInsurances(): Insurance[] {
    return [...this.insurances];
  }

  // ✅ สร้าง ID ใหม่
  private generateId(): number {
    return this.insurances.length > 0 ? Math.max(...this.insurances.map(i => i.id)) + 1 : 1;
  }
}
