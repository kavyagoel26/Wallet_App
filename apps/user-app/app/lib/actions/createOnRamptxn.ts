"use server"
//what user send when they click on add money button they tell us amount and provider database entry 

import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import prisma from "@repo/db/client";

//should be kept in onRamp table 
export async  function createOnRampTransactions(amount: number, provider:string){
    const session = await getServerSession(authOptions) // extract user id from nextauth
    //extract userid =get current user who is sending the request to the server 
    const userId = session.user.id;
    const token = Math.random().toString();
    // if (!session?.user || !session.user?.id) {
    //     return {
    //         message: "Unauthenticated request"
    //     }
    // }
    //const token = (Math.random() * 1000).toString();
    if(!userId){
        return{
            message:"User not logged in"
        }
    }
    await prisma.onRampTransaction.create({
        data:{
            userId: Number(userId),
            amount: amount,
            status: "Processing",
            startTime:new Date(),
            provider,
            token: token
        }
    })
}