function solve(ticketDescriptions, sortCriteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    const sortingFunctions = {
        destination: function(f, s) {
            return f.destination.localeCompare(s.destination);
        },

        status: function(f, s) {
            return f.status.localeCompare(s.status);
        },

        price: function(f, s) {
            return f.price - s.price;
        }
    };

    const tickets = [];
    ticketDescriptions.forEach(ticket => {
        const tokens = ticket.split('|');
        const destination = tokens[0];
        const price = Number(tokens[1]);
        const status = tokens[2];

        tickets.push(new Ticket(destination, price, status));
    });

    return tickets.sort(sortingFunctions[sortCriteria]);
}

