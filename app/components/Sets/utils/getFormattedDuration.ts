export function getFormattedDuration(duration: number): string {
    const date = new Date(duration * 1000); // Преобразуем секунды в миллисекунды

    // Форматируем каждую часть до двухзначного формата с ведущими нулями
    const formattedHours = String(date.getUTCHours()).padStart(2, '0');
    const formattedMinutes = String(date.getMinutes()).padStart(2, '0');
    const formattedSeconds = String(date.getSeconds()).padStart(2, '0');
  
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}