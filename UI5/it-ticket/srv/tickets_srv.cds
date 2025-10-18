using app.tickets from '../db/tickets';

service Srv_Tickets {
    entity Employees as projection on tickets.V_Employees;
    entity IT_Tickets as projection on tickets.V_IT_Tickets;
    entity Assigned_Support as projection on tickets.Assigned_Support;
}
