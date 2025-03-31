import { Component, OnInit } from '@angular/core';
import { InsuranceService } from '../../services/insurance.service';
import { Insurance } from '../../../models/insurance.model';

@Component({
  selector: 'app-approve-insurance',
  templateUrl: './approve-insurance.component.html',
  styleUrls: ['./approve-insurance.component.css']
})
export class ApproveInsuranceComponent implements OnInit {
  insuranceRequests: Insurance[] = [];
  selectedInsurance: Insurance | null = null;
  policyNumber: string = '';
  documentFile: File | null = null;

  constructor(private insuranceService: InsuranceService) { }

  ngOnInit(): void {
    this.loadPendingRequests();
  }

  loadPendingRequests() {
    this.insuranceRequests = this.insuranceService.getPendingRequests(); // method for fetching requests
  }

  approveInsurance(id: number) {
    if (this.policyNumber && this.documentFile) {
      this.insuranceService.approveInsurance(id, this.policyNumber, this.documentFile);
      this.loadPendingRequests(); // reload the requests list
    } else {
      alert('กรุณากรอกหมายเลขกรมธรรม์และอัปโหลดไฟล์เอกสาร');
    }
  }

  rejectInsurance(id: number) {
    this.insuranceService.rejectInsurance(id);
    this.loadPendingRequests();
  }

  onFileChange(event: any) {
    this.documentFile = event.target.files[0];
  }
}
