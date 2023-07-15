import { style } from '@vanilla-extract/css'

export const board = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})

export const boardUl = style({
  display: 'grid',
  minWidth: '200px',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '1rem',
  width: '100%',
  padding: '1rem',
  justifyContent: 'center'
})

export const boardLi = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: '0 0 10px rgba(0,0,0,0.5)',
  borderRadius: '4px',
  backgroundColor: 'white',
  color: 'black',
  padding: '1rem'
})
