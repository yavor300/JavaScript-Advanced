function solve(steps, length, speed) {
    const distanceKm = (steps * length) / 1000;
    const additionalMins = Math.floor(distanceKm / 0.5);

    const timeHours = distanceKm / speed; // hours
    const timeMinutes = timeHours * 60 + additionalMins;

    
    const hours = Math.floor(timeMinutes / 60).toFixed(0).padStart(2, "0");
    const minutes = Math.floor(timeMinutes % 60).toFixed(0).padStart(2, "0");
    const seconds = Math.ceil(((timeMinutes % 60) - minutes) * 60).toFixed(0).padStart(2, "0");

    console.log(`${hours}:${minutes}:${seconds}`);
}