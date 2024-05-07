import { FaEye, FaLock, FaPause, FaRegEdit } from 'react-icons/fa';

const userActionMenus = [
  { label: 'View', icon: <FaEye /> },
  { label: 'Edit', icon: <FaRegEdit /> },
  { label: 'License', icon: <FaPause /> },
  { label: 'InActive', icon: <FaRegEdit /> },
  { label: 'Enable OTP', icon: <FaLock /> },
  { label: 'Enable Email Verification', icon: <FaLock /> },
  { label: 'Enable Contact Verification', icon: <FaLock /> },
  { label: 'Reset Password', icon: <FaRegEdit /> },
];

export default userActionMenus;
