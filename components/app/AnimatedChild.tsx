import { ItemAnimation } from '../../lib/animations';
import { motion } from 'framer-motion';

export default function AnimatedChild({
  children,
  classNames,
}: {
  children: React.ReactNode;
  classNames?: string;
}) {
  return (
    <motion.div className={classNames} variants={ItemAnimation}>
      {children}
    </motion.div>
  );
}
