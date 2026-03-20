function dayOfWeek (day: number) :string {
    enum Days {
        Monday = 1,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    };

    console.log(Days[day] ?? 'error');
    return 'something';
}

dayOfWeek(15);
