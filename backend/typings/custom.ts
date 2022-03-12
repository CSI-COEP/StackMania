import { Request } from "express";
import { DecodedIdToken } from "firebase-admin/lib/auth/token-verifier";

export interface CourtRequest extends Request {
  user?: DecodedIdToken | null;
}
