import { Button } from 'antd';
import { StarOutlined, StarFilled } from '@ant-design/icons';

function StartButton({ isActive = false, onClick }) {
  const icon = isActive ? (
    <StarFilled style={{ color: '#ff7800' }} />
  ) : (
    <StarOutlined />
  );

  return <Button icon={icon} onClick={onClick} />;
}

export { StartButton };
