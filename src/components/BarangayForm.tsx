import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Printer, FileText } from "lucide-react";

interface FormData {
  recordNo: string;
  clearanceNo: string;
  issuedDate: string;
  prefix: string;
  firstname: string;
  middlename: string;
  surname: string;
  extension: string;
  houseBlockLot: string;
  street: string;
  age: string;
  zone: string;
  dateOfBirth: string;
  placeOfBirth: string;
  contactNo: string;
  residencyPeriod: string;
  registeredVoter: string;
  houseOwner: string;
  relationshipToOwner: string;
  purpose: string;
  purposeDetails: string;
  ctcVrrNo: string;
  issuedAt: string;
  issuedOn: string;
  orNo: string;
  remarks: string;
}

export default function BarangayForm() {
  const [formData, setFormData] = useState<FormData>({
    recordNo: "",
    clearanceNo: "",
    issuedDate: new Date().toISOString().split('T')[0],
    prefix: "",
    firstname: "",
    middlename: "",
    surname: "",
    extension: "",
    houseBlockLot: "",
    street: "",
    age: "",
    zone: "",
    dateOfBirth: "",
    placeOfBirth: "",
    contactNo: "",
    residencyPeriod: "",
    registeredVoter: "",
    houseOwner: "",
    relationshipToOwner: "",
    purpose: "",
    purposeDetails: "",
    ctcVrrNo: "",
    issuedAt: "",
    issuedOn: "",
    orNo: "",
    remarks: "",
  });

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handlePrint = () => {
    window.print();
  };

  const fullName = `${formData.prefix ? formData.prefix + ' ' : ''}${formData.firstname} ${formData.middlename} ${formData.surname} ${formData.extension}`.trim();

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      {/* Form Section */}
      <Card className="p-6 space-y-6">
        <div className="flex items-center gap-3 pb-4 border-b">
          <FileText className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-semibold text-foreground">Personal Information</h2>
        </div>

        <div className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="recordNo">Record No.</Label>
              <Input
                id="recordNo"
                placeholder="Enter record number"
                value={formData.recordNo}
                onChange={(e) => handleInputChange("recordNo", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="clearanceNo">Clearance No.</Label>
              <Input
                id="clearanceNo"
                placeholder="Enter clearance number"
                value={formData.clearanceNo}
                onChange={(e) => handleInputChange("clearanceNo", e.target.value)}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="issuedDate">Issued Date</Label>
            <Input
              id="issuedDate"
              type="date"
              value={formData.issuedDate}
              onChange={(e) => handleInputChange("issuedDate", e.target.value)}
            />
          </div>

          <div className="grid grid-cols-4 gap-4">
            <div>
              <Label htmlFor="prefix">Prefix</Label>
              <Select value={formData.prefix} onValueChange={(value) => handleInputChange("prefix", value)}>
                <SelectTrigger id="prefix">
                  <SelectValue placeholder="Mr/Ms" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Mr.">Mr.</SelectItem>
                  <SelectItem value="Ms.">Ms.</SelectItem>
                  <SelectItem value="Mrs.">Mrs.</SelectItem>
                  <SelectItem value="Dr.">Dr.</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="col-span-3">
              <Label htmlFor="firstname">Firstname</Label>
              <Input
                id="firstname"
                placeholder="Enter firstname"
                value={formData.firstname}
                onChange={(e) => handleInputChange("firstname", e.target.value)}
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="middlename">Middle Name</Label>
              <Input
                id="middlename"
                placeholder="Enter middle name"
                value={formData.middlename}
                onChange={(e) => handleInputChange("middlename", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="surname">Surname</Label>
              <Input
                id="surname"
                placeholder="Enter surname"
                value={formData.surname}
                onChange={(e) => handleInputChange("surname", e.target.value)}
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="extension">Extension</Label>
              <Input
                id="extension"
                placeholder="Jr., Sr., III"
                value={formData.extension}
                onChange={(e) => handleInputChange("extension", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="age">Age</Label>
              <Input
                id="age"
                type="number"
                placeholder="Enter age"
                value={formData.age}
                onChange={(e) => handleInputChange("age", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="dateOfBirth">Date of Birth</Label>
              <Input
                id="dateOfBirth"
                type="date"
                value={formData.dateOfBirth}
                onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="placeOfBirth">Place of Birth</Label>
            <Input
              id="placeOfBirth"
              placeholder="Enter place of birth"
              value={formData.placeOfBirth}
              onChange={(e) => handleInputChange("placeOfBirth", e.target.value)}
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="houseBlockLot">House Block Lot No.</Label>
              <Input
                id="houseBlockLot"
                placeholder="Enter house block lot"
                value={formData.houseBlockLot}
                onChange={(e) => handleInputChange("houseBlockLot", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="street">Street</Label>
              <Input
                id="street"
                placeholder="Enter street"
                value={formData.street}
                onChange={(e) => handleInputChange("street", e.target.value)}
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="zone">Zone</Label>
              <Input
                id="zone"
                placeholder="Enter zone"
                value={formData.zone}
                onChange={(e) => handleInputChange("zone", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="contactNo">Contact No.</Label>
              <Input
                id="contactNo"
                type="tel"
                placeholder="Enter contact number"
                value={formData.contactNo}
                onChange={(e) => handleInputChange("contactNo", e.target.value)}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="residencyPeriod">Period of Residency</Label>
            <Input
              id="residencyPeriod"
              placeholder="e.g., 5 years"
              value={formData.residencyPeriod}
              onChange={(e) => handleInputChange("residencyPeriod", e.target.value)}
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="registeredVoter">Registered Voter?</Label>
              <Select value={formData.registeredVoter} onValueChange={(value) => handleInputChange("registeredVoter", value)}>
                <SelectTrigger id="registeredVoter">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Yes">Yes</SelectItem>
                  <SelectItem value="No">No</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="houseOwner">House Owner</Label>
              <Input
                id="houseOwner"
                placeholder="Enter house owner name"
                value={formData.houseOwner}
                onChange={(e) => handleInputChange("houseOwner", e.target.value)}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="relationshipToOwner">Relationship to Owner</Label>
            <Input
              id="relationshipToOwner"
              placeholder="e.g., Son, Daughter, Tenant"
              value={formData.relationshipToOwner}
              onChange={(e) => handleInputChange("relationshipToOwner", e.target.value)}
            />
          </div>

          <div>
            <Label htmlFor="purpose">Purpose</Label>
            <Select value={formData.purpose} onValueChange={(value) => handleInputChange("purpose", value)}>
              <SelectTrigger id="purpose">
                <SelectValue placeholder="Select purpose" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Employment">Employment</SelectItem>
                <SelectItem value="Business Permit">Business Permit</SelectItem>
                <SelectItem value="Travel">Travel</SelectItem>
                <SelectItem value="School Requirements">School Requirements</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="purposeDetails">Purpose Details</Label>
            <Input
              id="purposeDetails"
              placeholder="Enter additional details"
              value={formData.purposeDetails}
              onChange={(e) => handleInputChange("purposeDetails", e.target.value)}
            />
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="ctcVrrNo">CTC/VRR No.</Label>
              <Input
                id="ctcVrrNo"
                placeholder="Enter number"
                value={formData.ctcVrrNo}
                onChange={(e) => handleInputChange("ctcVrrNo", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="issuedAt">Issued at</Label>
              <Input
                id="issuedAt"
                placeholder="Location"
                value={formData.issuedAt}
                onChange={(e) => handleInputChange("issuedAt", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="issuedOn">Issued on</Label>
              <Input
                id="issuedOn"
                type="date"
                value={formData.issuedOn}
                onChange={(e) => handleInputChange("issuedOn", e.target.value)}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="orNo">O.R. No.</Label>
            <Input
              id="orNo"
              placeholder="Enter O.R. number"
              value={formData.orNo}
              onChange={(e) => handleInputChange("orNo", e.target.value)}
            />
          </div>

          <div>
            <Label htmlFor="remarks">Remarks</Label>
            <Input
              id="remarks"
              placeholder="Enter any remarks"
              value={formData.remarks}
              onChange={(e) => handleInputChange("remarks", e.target.value)}
            />
          </div>
        </div>
      </Card>

      {/* Preview Section */}
      <div className="space-y-4">
        <Card className="p-8 print:shadow-none" id="clearance-preview">
          <div className="space-y-6">
            {/* Header */}
            <div className="text-center space-y-2 pb-6 border-b-2 border-primary">
              <h1 className="text-sm font-medium text-muted-foreground">Republic of the Philippines</h1>
              <h2 className="text-base font-semibold">City of Taguig</h2>
              <h3 className="text-2xl font-bold text-primary">Barangay West Rembo</h3>
              <p className="text-sm text-muted-foreground">Plaza Drive, A. Mabini Street West Rembo, 1644</p>
              <p className="text-sm text-muted-foreground">Hotline 8835-9722</p>
            </div>

            {/* Office Title */}
            <div className="text-center space-y-1">
              <h4 className="text-lg font-semibold">OFFICE OF THE PUNONG BARANGAY</h4>
              <div className="flex justify-end text-sm">
                <span className="text-muted-foreground">Date: {formData.issuedDate || "___________"}</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl font-bold text-center text-primary pt-4">BARANGAY CLEARANCE</h1>

            {/* Body */}
            <div className="space-y-4 text-sm">
              <p className="font-semibold">TO WHOM IT MAY CONCERN:</p>
              
              <p className="leading-relaxed">
                THIS IS TO CERTIFY that person whose name and thumb marks appearing hereon has requested Barangay Clearance from this office.
              </p>

              <p className="font-semibold">REMARKS:</p>

              <div className="space-y-2 pl-4">
                <div className="grid grid-cols-2 gap-2">
                  <span>Name:</span>
                  <span className="font-medium">{fullName || "___________"}</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <span>Address:</span>
                  <span className="font-medium">{formData.street || "___________"}, West Rembo, Taguig City</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <span>Date of Birth:</span>
                  <span className="font-medium">{formData.dateOfBirth || "___________"}</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <span>Place of Birth:</span>
                  <span className="font-medium">{formData.placeOfBirth || "___________"}</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <span>Period of Residency:</span>
                  <span className="font-medium">{formData.residencyPeriod || "___________"}</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <span>House Owner:</span>
                  <span className="font-medium">{formData.houseOwner || "___________"}</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <span>Relationship to House Owner:</span>
                  <span className="font-medium">{formData.relationshipToOwner || "___________"}</span>
                </div>
              </div>

              <p className="leading-relaxed pt-2">
                This clearance is issued upon the request of the subject person to support his/her application for:
              </p>

              <div className="space-y-2 pl-4">
                <div className="grid grid-cols-2 gap-2">
                  <span>CTC/VRR No.:</span>
                  <span className="font-medium">{formData.ctcVrrNo || "___________"}</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <span>Issued at:</span>
                  <span className="font-medium">{formData.issuedAt || "___________"}</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <span>Issued On:</span>
                  <span className="font-medium">{formData.issuedOn || "___________"}</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <span>O.R. No.:</span>
                  <span className="font-medium">{formData.orNo || "___________"}</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <span>Barangay Clearance No.:</span>
                  <span className="font-medium">{formData.clearanceNo || "___________"}</span>
                </div>
              </div>

              {/* Signature Section */}
              <div className="pt-8 space-y-8">
                <div className="text-center">
                  <p className="text-sm italic">Applicant's Signature</p>
                  <div className="border-b-2 border-foreground mt-8 w-64 mx-auto"></div>
                </div>

                <div className="text-center">
                  <div className="border-b-2 border-foreground w-64 mx-auto mb-1"></div>
                  <p className="font-bold">HON. LEO E. BES</p>
                  <p className="text-sm">PUNONG BARANGAY</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Button onClick={handlePrint} className="w-full" size="lg">
          <Printer className="mr-2 h-5 w-5" />
          Print Clearance
        </Button>
      </div>
    </div>
  );
}
