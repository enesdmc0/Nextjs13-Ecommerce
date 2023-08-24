"use client"

import { ColumnDef } from "@tanstack/react-table"
import CellAction from "@/app/(dashboard)/[storeId]/(routes)/billboards/components/cell-action";


export interface BillboardColumn  {
    id: string
    label: string
    createdAt: string
}

export const columns: ColumnDef<BillboardColumn>[] = [
    {
        accessorKey: "label",
        header: "Label",
    },
    {
        accessorKey: "createdAt",
        header: "Date",
    },
    {
        id: "actions",
        cell: ({row}) => <CellAction data={row.original}/>
    }
]
