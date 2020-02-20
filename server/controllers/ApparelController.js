import express from "express"
import ApparelService from "../services/ApparelService"

let _apparelService = new ApparelService().repository

//NOTE this controller route is under '/api/apparel'
export default class ApparelController {
    constructor() {
        this.router = express.Router()
            .get('', this.getAllApparel)
            .get('/:id', this.getApparelById)
            .post('', this.addApparel)
            .put('/:id', this.editApparel)
            .delete('/:id', this.deleteApparel)
    }

    async getAllApparel(req, res, next) {
        try {
            let apparel = await _apparelService.find({})
            return res.send(apparel)
        } catch (error) {
            next(error)

        }
    }

    async getApparelById(req, res, next) {
        try {
            let apparel = await _apparelService.findById(req.params.id)
            return res.send(apparel)
        } catch (error) {
            next(error)

        }
    }
    async addApparel(req, res, next) {
        try {
            let newApparel = await _apparelService.create(req.body)
            return res.send(newApparel)
        } catch (error) {
            next(error)

        }
    }

    async editApparel(req, res, next) {
        try {
            let editedApparel = await _apparelService.findOneAndUpdate({ _id: req.params.id },
                req.body, { new: true })
            return res.send(editedApparel)
        } catch (error) { next(error) }
    }

    async deleteApparel(req, res, next) {
        try {
            await _apparelService.findOneAndRemove({ _id: req.params.id })
            res.send("Deleted")
        } catch (error) {
            next(error)
        }
    }
}