export default function calculateHealthPoints(healthPoints) {
  if (healthPoints.health >= 50) {
    return 'healthy';
  } if (healthPoints.health < 50 && healthPoints.health > 15) {
    return 'wounded';
  }
  return 'critical';
}
