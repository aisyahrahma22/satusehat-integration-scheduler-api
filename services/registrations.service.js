import db from '../models/index';
import encryption from '../lib/encryption';

export const getRegistrationsData = async (params) => {
    try {
        const sql = `
            SELECT
                tph.uuid,
                p."firstName",
                p."lastName",
                p."waNumber" as "phoneWa",
                th.name as "hospitalName"
            FROM
                temp_pmr_header tph
                JOIN registrations r ON tph."registrationsId" = r.id
                JOIN patients p ON r."patientsId" = p.id
                JOIN tm_hospitals th ON r."hospitalId" = th.id::varchar 
            WHERE
                tph."paymentStatus" = '1'
        `;

        const results = await db.sequelize.query(sql, { type: db.sequelize.QueryTypes.SELECT });

        const decryptedResults = results.map((data) => {
            if (data.firstName) {
                data.firstName = encryption.hashDecode(data.firstName);
            }
            if (data.lastName) {
                data.lastName = encryption.hashDecode(data.lastName);
            }
            if (data.phoneWa) {
                data.phoneWa = encryption.hashDecode(data.phoneWa);
            }
            return data;
        });

        return { registrations: decryptedResults };
    } catch (error) {
        console.error('Error fetching registration data:', error);
        throw error;
    }
};

export default {
    getRegistrationsData,
};
