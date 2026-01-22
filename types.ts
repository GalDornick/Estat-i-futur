
import React from 'react';

export interface Section {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: string[];
  fullText: string;
}

export interface HealthStatus {
  ambit: string;
  estat: string;
}