import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import PersonIcon from '@mui/icons-material/Person';

import {useSelector} from 'react-redux'

const PersonIconComponent = () => {
  const itemCount = useSelector((state) => state.itemCount)
  console.log({ itemCount })

  return (
    <IconButton  ton size="large" aria-label="show 4 new mails" color="inherit">
      <Badge badgeContent={itemCount} color="error">
        <PersonIcon />
      </Badge>
    </IconButton>
  );
};

export default PersonIconComponent;
