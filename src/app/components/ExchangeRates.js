"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const ExchangeRates = () => {
    const [rates, setRates] = useState({
        USD: 0,
        CNY: 0,
        TRY: 0
    });

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await fetch(`https://api.exchangerate-api.com/v4/latest/EUR`);
                const data = await response.json();
                setRates({
                    USD: data.rates.USD,
                    CNY: data.rates.CNY,
                    TRY: data.rates.TRY
                });
            } catch (error) {
                console.error('Error fetching exchange rates:', error);
            }
        };

        fetchRates();
        // Update rates every 5 minutes
        const interval = setInterval(fetchRates, 5 * 60 * 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <Card className="mb-6">
            <CardHeader>
                <CardTitle className="text-xl font-semibold text-center">Exchange Rates (1 EUR)</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                        <p className="text-sm text-gray-500">USD</p>
                        <p className="text-lg font-semibold">{rates.USD.toFixed(2)}</p>
                    </div>
                    <div className="text-center">
                        <p className="text-sm text-gray-500">CNY</p>
                        <p className="text-lg font-semibold">{rates.CNY.toFixed(2)}</p>
                    </div>
                    <div className="text-center">
                        <p className="text-sm text-gray-500">TRY</p>
                        <p className="text-lg font-semibold">{rates.TRY.toFixed(2)}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default ExchangeRates;
