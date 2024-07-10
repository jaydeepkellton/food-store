import { Grid } from '@mui/material'
import React from 'react'
import { ReactNode } from 'react'

interface MUIGridModal {
  children?: ReactNode
  spacing?: number | { xs?: number; sm?: number; md?: number; lg?: number; xl?: number }
  rowSpacing?: number | { xs?: number; sm?: number; md?: number; lg?: number; xl?: number }
  columnSpacing?: number | { xs?: number; sm?: number; md?: number; lg?: number; xl?: number }
  columns?: number | { xs?: number; sm?: number; md?: number; lg?: number; xl?: number }
  className?: string
  xs?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
  style?: React.CSSProperties
  container?: boolean
  item?: boolean
  gap?: number
  display?: string
  key?: number | string
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  gridTemplateColumns?: string
  gridTemplateRows?: string
  gridTemplateAreas?: string
}
const MUIGrid: React.FC<MUIGridModal> = ({
  xs,
  sm,
  md,
  lg,
  xl,
  className,
  spacing,
  rowSpacing,
  columnSpacing,
  columns,
  children,
  style,
  container = false,
  item = false,
  gap,
  gridTemplateColumns,
  gridTemplateRows,
  gridTemplateAreas,
  display = '',
  key,
}) => {
  return (
    <Grid
      sx={style}
      xs={xs}
      sm={sm}
      md={md}
      lg={lg}
      xl={xl}
      container={container}
      item={item}
      className={className}
      spacing={spacing}
      rowSpacing={rowSpacing}
      columnSpacing={columnSpacing}
      gap={gap}
      display={display}
      key={key}
      columns={columns}
      gridTemplateColumns={gridTemplateColumns}
      gridTemplateRows={gridTemplateRows}
      gridTemplateAreas={gridTemplateAreas}
    >
      {children}
    </Grid>
  )
}
export default MUIGrid
