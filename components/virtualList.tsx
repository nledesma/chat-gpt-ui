import { FixedSizeList, ListChildComponentProps } from "react-window";
import { Box, ListItem, ListItemButton, ListItemText, useTheme } from "@mui/material";
import get from 'lodash.get';

export interface VirtualListProps<T> {
  items: Array<T>,
  primaryTextPath: string,
  secondaryTextPath: string,
  keyPath: string,
  height: number,
  onSelect: (item: T) => void
}

const VirtualList = ({
  items,
  primaryTextPath,
  secondaryTextPath,
  keyPath,
  onSelect,
}: VirtualListProps<any>) => {
  const theme = useTheme();
  const renderRow = (props: ListChildComponentProps) => {
    const { index, style } = props;
    const item = items[index];
    return (
      <ListItem style={{ ...style, paddingLeft: '0px', paddingRight: '0px' }} key={get(item, keyPath)}>
        <ListItemButton onClick={() => onSelect(item)}>
          <ListItemText primary={get(item, primaryTextPath)} secondary={get(item, secondaryTextPath)} />
        </ListItemButton>
      </ListItem>
    )
  }

  return (
    <Box>
      <FixedSizeList 
        style={{ 
          position: 'absolute', 
          zIndex: 3000, 
          backgroundColor: theme.palette.background.paper, 
          maxWidth: '1152px',
          width: '94%',
          marginRight: 'auto',
          marginLeft: 'auto',
        }} 
        width="100%" height={250} 
        itemSize={64} 
        itemCount={items.length}>
        {renderRow}
      </FixedSizeList>
    </Box>
  )
};

export default VirtualList;
