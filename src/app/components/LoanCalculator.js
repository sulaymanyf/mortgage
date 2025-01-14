"use client";

import React, { useState } from 'react';
import { Slider } from "./ui/slider"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"
import { InfoIcon } from 'lucide-react'

const LoanCalculator = () => {
    const [loanAmount, setLoanAmount] = useState(100000);
    const [annualInterestRate, setAnnualInterestRate] = useState(3);
    const [loanTerm, setLoanTerm] = useState(10);
    const [monthlyPayment, setMonthlyPayment] = useState(0);

    const calculateMonthlyPayment = () => {
        const P = loanAmount;
        const r = (annualInterestRate / 100) / 12;
        const n = loanTerm * 12;
        const M = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        setMonthlyPayment(M.toFixed(2));
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 p-4">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center text-gray-800">Loan Calculator</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 flex items-center">
                            Loan Amount (€)
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <InfoIcon className="w-4 h-4 ml-1 text-gray-400" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>The total amount you wish to borrow</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </label>
                        <Input
                            type="number"
                            value={loanAmount}
                            onChange={(e) => setLoanAmount(Number(e.target.value))}
                            className="w-full"
                        />
                        <Slider
                            value={[loanAmount]}
                            onValueChange={(value) => setLoanAmount(value[0])}
                            max={1000000}
                            step={1000}
                            className="w-full"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 flex items-center">
                            Annual Interest Rate (%)
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <InfoIcon className="w-4 h-4 ml-1 text-gray-400" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>The yearly interest rate for the loan</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </label>
                        <Input
                            type="number"
                            value={annualInterestRate}
                            onChange={(e) => setAnnualInterestRate(Number(e.target.value))}
                            className="w-full"
                            step="0.1"
                        />
                        <Slider
                            value={[annualInterestRate]}
                            onValueChange={(value) => setAnnualInterestRate(value[0])}
                            max={20}
                            step={0.1}
                            className="w-full"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 flex items-center">
                            Loan Term (Years)
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <InfoIcon className="w-4 h-4 ml-1 text-gray-400" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>The duration of the loan in years</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </label>
                        <Input
                            type="number"
                            value={loanTerm}
                            onChange={(e) => setLoanTerm(Number(e.target.value))}
                            className="w-full"
                        />
                        <Slider
                            value={[loanTerm]}
                            onValueChange={(value) => setLoanTerm(value[0])}
                            max={30}
                            step={1}
                            className="w-full"
                        />
                    </div>
                    <Button 
                        onClick={calculateMonthlyPayment}
                        className="w-full transition-all duration-300 transform hover:scale-105"
                    >
                        Calculate
                    </Button>
                    <div className="text-center">
                        <h2 className="text-lg font-semibold text-gray-700">Monthly Payment</h2>
                        <p className="text-3xl font-bold text-blue-600">
                            €{monthlyPayment}
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default LoanCalculator;
