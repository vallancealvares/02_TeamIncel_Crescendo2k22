import {getConnection} from "typeorm";
import User from "../entities/User";


const UserController = {
    create: async (req: any, res: any) => {



        try {
            await getConnection()
                .createQueryBuilder()
                .insert()
                .into(User)
                .values({
                    fname: req.body.fname,
                    lname: req.body.lname,
                    username: req.body.username,
                    email: req.body.email,  
                    password: req.body.password
                })
                .returning('*')
                .execute()
            return res.send({data: "succesfully added"})
        } catch (err) {
            return res.status(400).send(err)
        }
    },


    fetch: async (_req: any, res: any) => {
        const result =
            await getConnection()
                .createQueryBuilder()
                .select()
                .from(User,'User')
                .where({})
                .execute()
        return res.send(result)
    }
    
}

export default UserController