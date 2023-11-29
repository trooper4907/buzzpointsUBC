'use client';

import { BonusCategory } from "@/types";
import Table from "./Table";
import { formatDecimal, formatPercent } from "@/utils";

type BonusCategoryTableProps = {
    bonusCategoryStats: BonusCategory[]
}

export default function BonusCategoryTable({ bonusCategoryStats }: BonusCategoryTableProps) {
    const columns = [
        {
            key: "name",
            label: "Team Name"
        },
        {
            key: "heard",
            label: "Heard"
        },
        {
            key: "ppb",
            label: "PPB",
            format: formatDecimal
        },
        {
            key: "easy_conversion",
            label: "Easy %",
            format: formatPercent
        },
        {
            key: "medium_conversion",
            label: "Medium %",
            format: formatPercent
        },
        {
            key: "hard_conversion",
            label: "Hard %",
            format: formatPercent
        }
    ];

    return <Table columns={columns} data={bonusCategoryStats} />;
}