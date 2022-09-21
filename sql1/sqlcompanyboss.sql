-- SQL Company Boss
-- Your table: maintable_UAD2K

-- MySQL version: 8.0.23

-- In this MySQL challenge, your query should return all the people who report to either Jenny Richards or have a NULL value in ReportsTo. The rows should be ordered by Age. Your query should also add a column at the end with a title of Boss Title where the value is either None or CEO. Your output should look like the following table.
-- or have a NULL value in ReportsTo. The rows should be ordered by Age.
/* write your SQL query below */
/* write your SQL query below */
SELECT
    FirstName,
    LastName,
    ReportsTo,
    Position,
    Age,
    CASE
        WHEN ReportsTo IS NULL THEN 'None'
        ELSE 'CEO'
    END AS 'Boss Title'     
FROM maintable_6O4SU
WHERE ReportsTo = 'Jenny Richards' OR ReportsTo IS NULL
ORDER BY Age;
