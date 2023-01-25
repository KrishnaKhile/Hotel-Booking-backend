import Bilty from "../models/Bilty.js";
import Invcounter from "../models/invCounter.js";
import { io } from "../index.js";
// Get Bilty Number
export const biltyNumber = async (req, res, next) => {
  try {
    const getBiltyNumber = await Invcounter.findOne();
    io.emit("biltynumber", getBiltyNumber);
    res.status(200).json(getBiltyNumber);
  } catch (error) {
    next(error);
  }
};
//  Create Bilty
export const createBilty = async (req, res, next) => {
  const data = req.body;
  console.log(data);
  try {
    Invcounter.findOneAndUpdate(
      { id: "autoval" },
      { $inc: { seq: 1 } },
      { new: true },
      (err, cd) => {
        let seqId;
        if (cd == null) {
          const newval = new Invcounter({ id: "autoval", seq: 1 });
          newval.save();
          seqId = 1;
        } else {
          seqId = cd.seq;
        }
        const newBilty = new Bilty({
          biltynumber: seqId,
          norname: req.body.norid,
          altnormobile: req.body.altnormobile,
          norcity: req.body.norcity,
          neename: req.body.neeid,
          co: req.body.co,
          altneemobile:req.body.altneemobile,
          neecity: req.body.neecity,
          invno: req.body.invno,
          invdate: req.body.invdate,
          invamt: req.body.invamt,
          ewaybill: req.body.ewaybill,
          distance: req.body.distance,
          mop: req.body.mop,
          dloffice: req.body.dloffice,
          goods: req.body.goods,
          frcharges: req.body.frcharges,
          hamali: req.body.hamali,
          doccharges: req.body.doccharges,
          totalqty: req.body.totalqty,
          ddcharges: req.body.ddcharges,
          othercharges: req.body.othercharges,
          // gst: req.body.gst,
          totalfr: req.body.totalfr,
          remark: req.body.remark,
          user: req.body.user,
        });
        newBilty.save();
      }
    );
    res.status(200).json("Bilty Added Successfully");
  } catch (error) {
    next(error);
  }
};

// // GET One
export const getOneBilty = async (req, res, next) => {
  try {
    const getoneBilty = await Bilty.findOne({ biltynumber: req.params.id });
    res.status(200).json(getoneBilty);
  } catch (error) {
    next(error);
  }
};

// // DELETE CONSIGNOR

// export const deleteNor = async (req, res, next) => {
//   const id= req.params.id
//   try {
//     const deleteNor = await Consignor.findByIdAndDelete({_id:id});
//     if (!deleteNor) {
//       res.status(404).json(`No Consignor found with id : ${id}`);
//     } else {
//       res.status(200).send(deleteNor);
//     }
//   } catch (error) {
//     next(error);
//   }
// };

// UPDATE Consignor
export const updateBilty = async (req, res, next) => {
  // const profile = req.file ? req.file.filename : "profile-preview.png";
  // console.log(req.body,profile);
  try {
    const updatedBilty = await Consignor.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    if (!updatedNor) {
      res.status(404).json(`No LR found with LR NO. : ${req.params.id}`);
    } else {
      res.status(200).json(updatedBilty);
    }
  } catch (error) {
    next(error);
  }
};

// // CREATE CONSIGNEE
// export const createNee = async (req, res, next) => {
//   try {
//     const newNor = await Consignee.create(req.body);
//     // if (!newNor) return next(createError(500, "Name, Short Code and Email ID must be unique."));
//     res.status(200).json(newNor);
//   } catch (error) {
//     res.status(500).json("Name, Short Code and Email ID must be unique.");
//     next(error);
//   }
// };

// // // GET ALL
// export const consignee = async (req, res, next) => {
//   try {
//     const getAllNee = await Consignee.find();
//     res.status(200).json(getAllNee);
//   } catch (error) {
//     next(error);
//   }
// };

// // DELETE CONSIGNEE
// export const deleteNee = async (req, res, next) => {
//   const id= req.params.id
//   try {
//     const deleteNee = await Consignee.findByIdAndDelete({_id:id});
//     if (!deleteNee) {
//       res.status(404).json(`No Consignee found with id : ${id}`);
//     } else {
//       res.status(200).send(deleteNee);
//     }
//   } catch (error) {
//     next(error);
//   }
// };

// // UPDATE Consignee
// export const updateNee = async (req, res, next) => {
//   // const profile = req.file ? req.file.filename : "profile-preview.png";
//   // console.log(req.body,profile);
//   try {
//     const updatedNee = await Consignee.findByIdAndUpdate(
//       req.params.id,
//       { $set: req.body},
//       { new: true }
//     );
//     if (!updatedNee) {
//       res.status(404).json(`No Consignor found with id : ${ req.params.id}`);
//     } else {
//       res.status(200).json(updatedNee);
//     }
//   } catch (error) {
//     next(error);
//   }
// };

// // city controller srart

// // CREATE CONSIGNEE
// export const createCity = async (req, res, next) => {
//   try {
//     const newNor = await City.create(req.body);
//     res.status(200).json(newNor);
//   } catch (error) {
//     // res.status(500).json("Name, Short Code and Email ID must be unique.");
//     next(error);
//   }
// };

// // // GET ALL
// export const city = async (req, res, next) => {
//   try {
//     const getAllNee = await City.find();
//     res.status(200).json(getAllNee);
//   } catch (error) {
//     next(error);
//   }
// };

// // DELETE City
// export const deleteCity = async (req, res, next) => {
//   const id= req.params.id
//   try {
//     const deleteCity = await City.findByIdAndDelete({_id:id});
//     if (!deleteCity) {
//       res.status(404).json(`No Consignee found with id : ${id}`);
//     } else {
//       res.status(200).send(deleteCity);
//     }
//   } catch (error) {
//     next(error);
//   }
// };

// // UPDATE City
// export const updateCity = async (req, res, next) => {
//   // const profile = req.file ? req.file.filename : "profile-preview.png";
//   // console.log(req.body,profile);
//   try {
//     const updatedCity = await City.findByIdAndUpdate(
//       req.params.id,
//       { $set: req.body},
//       { new: true }
//     );
//     if (!updatedCity) {
//       res.status(404).json(`No City found with id : ${ req.params.id}`);
//     } else {
//       res.status(200).json(updatedCity);
//     }
//   } catch (error) {
//     next(error);
//   }
// };
