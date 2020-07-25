
import {getCadre, calculateTax, getBenefits, calculateBonus, reimbursementEligibility} from './employee1.mjs';
import employee from './employee1.mjs';

function getEmployeeInformation(inputSalary) {
    employee.salary = inputSalary;
    console.log('Cadre: ' + getCadre());
    console.log('Tax: ' + calculateTax());
    console.log('Benefits: ' + getBenefits());
    console.log('Bonus: ' + calculateBonus());
    console.log('Reimbursement Eligibility: ' + reimbursementEligibility() + '\n');
  }
  
  getEmployeeInformation(10000);
  getEmployeeInformation(50000);
  getEmployeeInformation(100000);
  