
"use client";

import React from "react";
import classes from "./module-card.module.css";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "../ui/card";

interface ModuleCardProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ number, title, description, icon }) => {
  return (
    <Card className={classes.card}>
      <CardHeader className={classes.cardHeader}>
        <div className={classes.iconWrapper}>
          <div className={classes.iconCircle}>{icon}</div>
         
        </div>
        <CardTitle className={classes.title}>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className={classes.description}>{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default ModuleCard;
