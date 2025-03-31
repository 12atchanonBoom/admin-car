import { Component } from '@angular/core';
import { InsuranceService } from '../../services/insurance.service';
import { Insurance } from '../../../models/insurance.model';

@Component({
  selector: 'app-insurance-management',
  templateUrl: './insurance-management.component.html',
  styleUrls: ['./insurance-management.component.css']
})
export class InsuranceManagementComponent {
  insurances: Insurance[] = [];
  formModel: Insurance = this.initInsurance();
  isEditMode = false;

  insuranceTypes = ['ประกันชั้น 1', 'ประกันชั้น 2+', 'ประกันชั้น 3'];
  vehicleTypes = ['รถเก๋ง', 'รถกระบะ', 'รถจักรยานยนต์'];
  statusTypes = ['pending', 'approved', 'rejected'];  // เพิ่มสถานะสำหรับคำขอ

  constructor(private insuranceService: InsuranceService) {
    this.loadData();
  }

  loadData() {
    this.insurances = this.insuranceService.getInsurances();
  }

  initInsurance(): Insurance {
    return { 
      id: 0, 
      name: '', 
      type: '', 
      coverage: 0, 
      price: 0, 
      durationMonths: 12, 
      details: '', 
      status: 'pending'  // ตั้งค่าเริ่มต้น
    };
  }

  onSubmit() {
    if (this.isEditMode) {
      this.insuranceService.updateInsurance(this.formModel);
    } else {
      this.insuranceService.addInsurance(this.formModel);
    }
    this.resetForm();
    this.loadData();
  }

  onEdit(item: Insurance) {
    this.formModel = { ...item };
    this.isEditMode = true;
  }

  onDelete(id: number) {
    this.insuranceService.deleteInsurance(id);
    this.loadData();
  }

  resetForm() {
    this.formModel = this.initInsurance();
    this.isEditMode = false;
  }
}
