import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { TListNavMenuProps } from '../list-nav-menu';

export interface AppBarProps extends MuiAppBarProps {
    open?: boolean
  }
  
export type TDashboarPanelProps = {
    children: React.ReactNode
    listMenu: Array<TListNavMenuProps>
}
