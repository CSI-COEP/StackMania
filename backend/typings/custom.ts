import { Request } from "express";
import { DecodedIdToken } from "firebase-admin/lib/auth/token-verifier";

export type Role = "MAIN_ADMIN" | "JUDGE" | "LAWYER" | "USER" | "POLICE";

export interface CreateCaseCall {
  policeStation: string;
  lawyer: string;
  by: string;
  for: string;
  bookedUnder: string;
  documentId?: string[];
}
export interface CourtRequest extends Request {
  user?: DecodedIdToken | null;
}
