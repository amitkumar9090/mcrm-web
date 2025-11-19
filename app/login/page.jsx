"use client";
import React, { useEffect } from "react"; // <-- added useEffect
import LoginForm from "../components/LoginForm";
import { useRouter } from "next/navigation";
import { isAuthenticated } from "../utils/auth";

export default function LoginPage() {
  const router = useRouter();

  useEffect(() => {
    // If user is already logged in, redirect to dashboard
    if (isAuthenticated()) {
      router.replace("/master");
    }
  }, [router]);

  return (
    <div className="main-wrapper">
      <div className="overflow-hidden p-3 acc-vh">
        <div className="row vh-100 w-100 g-0">
          <div className="col-lg-6 vh-100 overflow-y-auto overflow-x-hidden">
            <div className="row">
              <div className="col-md-10 mx-auto">
                <LoginForm />
              </div>
            </div>
          </div>
          <div className="col-lg-6 account-bg-01" />
        </div>
      </div>
    </div>
  );
}
