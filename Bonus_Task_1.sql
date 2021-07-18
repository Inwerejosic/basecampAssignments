/* Section A of the Solution */

SELECT TenantName     /* This is telling the program what I need to find*/
FROM Tenants          /* This is telling the program where it should look for the thing I need*/
INNER JOIN(           /* This is block telling the program how to link all the various tables to make a logical connection between them*/
    SELECT TenantID
    FROM AptTenants
    GROUP BY TenantID
    HAVING count(*)>1)c
)
ON Tenants.TenantID = c.TenantID   /* This is how the output I demand from the program is coming out.*/


/* Section b of the Solution */ 
SELECT BuildingName, ISNULL(count,0) as 'count'     /* This is telling the program what I need to find and the condition it must meet*/
FROM Buildings                                      /* This is telling the program the location it should look for the thing I need*/
LEFT JOIN(                                          /* This is block telling the program how to link all the various tables to make a logical connection between them*/
    SELECT Apartments.BuildingID, count(*) as 'count'
    FROM Requests INNER JOIN Apartments
ON Requests.AptID = Apartments.AptID                /* This is how connections between the apartments and requests tables are established*/
WHERE Requests.Status = 'Open'
GROUP BY Apartments.BuildingID) ReqCounts
ON ReqCounts.BuildingID = Buildings.BuildingID      /* This is how the output I demand from the program is coming out.*/

