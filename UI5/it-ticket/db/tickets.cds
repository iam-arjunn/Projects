namespace app.tickets;
type  flag : String(1);

entity Employees {
    key empID       : String(10);
        firstName   : String(20);
        lastName    : String(20);
        email       : String(60);
        designation : String(50);
        isActive    : flag;
}

entity IT_Tickets {
    key ticketID     : UUID;
        type         : String(100);
        HR           : String(10);
        supportUser   : String(10);
        isActive     : flag;
}

entity Assigned_Support {
    key guid         : UUID;
        wfInstance   : String(64);
        ticketType   : String(100);
        requester    : String(10);
        HR           : String(10);
        supportUser  : String(10);
}

//Creation of View
view V_Employees as
    select from Employees {
        key empID       as Employee_ID,
            firstName   as First_Name,
            lastName    as Last_Name,
            firstName || ' ' || lastName as Full_Name : String(50),
            email       as Email,
            designation as Designation
    }
    where
        isActive = 'X';

view V_IT_Tickets as select from IT_Tickets as ticket {
    key ticket.ticketID as Ticket_ID,
        ticket.type as Ticket_Type,
        ticket.HR as HR,
        (select Full_Name from V_Employees where Employee_ID = ticket.HR) as HR_Name: String(50),
        ticket.supportUser as Support_User,
        (select Full_Name from V_Employees where Employee_ID = ticket.supportUser) as SupportUser_Name: String(50),
} where isActive = 'X';